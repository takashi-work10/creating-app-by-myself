// app/diagnosis/page.tsx
'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';

const QUESTIONS: string[] = [
  '突然の動悸や胸の痛みを感じることがある',
  '息苦しさや呼吸がしにくくなることがある',
  '手足のしびれや震えを感じることがある',
  'めまいやふらつきを感じることがある',
  '過剰な恐怖感に襲われることがある',
  '現実感が失われるように感じることがある',
  '吐き気やお腹の不快感を感じることがある',
  '胸が締め付けられるような感覚になることがある',
  '恐怖から逃げ出したくなることがある',
  '閉所や人混みで息苦しさを感じることがある',
  'コントロール不能な恐怖を感じることがある',
  '汗ばみや火照りを感じることがある',
  '冷えやしびれを感じることがある',
  '心臓が止まるのではないかと思うことがある',
  '死ぬのではないかと思うほど怖くなることがある',
  'パニック発作がまた起きるのではと常に不安である',
  '予期不安で日常生活に支障をきたすことがある',
  '発作を思い出すだけで緊張することがある',
  '発作経験者の話を聞くだけで不安になることがある',
  '「また起きたらどうしよう」と考えすぎてしまう',
];

const RADIO_OPTIONS = [1, 2, 3, 4, 5].map((n) => ({ value: n.toString() }));

// ヘッダー固定用の高さ（px）
const HEADER_HEIGHT = 64;

export default function DiagnosisPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>(
    Array(QUESTIONS.length).fill('')
  );
  const questionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleChange = (idx: number, val: string) => {
    const next = [...answers];
    next[idx] = val;
    setAnswers(next);

    // 次の質問へスクロール
    const nextEl = questionRefs.current[idx + 1];
    if (nextEl) {
      const top =
        nextEl.getBoundingClientRect().top +
        window.pageYOffset -
        HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const answeredCount = answers.filter((a) => a !== '').length;
  const progress = (answeredCount / QUESTIONS.length) * 100;

  const handleSubmit = () => {
    if (answeredCount < QUESTIONS.length) {
      alert('すべての質問に答えてください');
      return;
    }
    const totalScore = answers.reduce((sum, v) => sum + Number(v), 0);
    router.push(`/result?score=${totalScore}`);
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
        minHeight: '100vh',
        px: { xs: 2, sm: 4 },
        pt: { xs: 3, sm: 5 },
        pb: { xs: 4, sm: 6 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 500,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(6px)',
          borderRadius: 2,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          overflow: 'hidden',
        }}
      >
        {/* 固定ヘッダー */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            pt: 2,
            pb: 1,
            px: 2,
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <Typography variant="body2" align="center">
            {answeredCount} / {QUESTIONS.length} 問回答済み
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              mt: 1,
              backgroundColor: '#EEE',
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
                background: 'linear-gradient(90deg, #CF9FFF 0%, #8E2DE2 100%)',
              },
            }}
          />
        </Box>

        <FormControl component="fieldset" sx={{ p: 2 }}>
          {QUESTIONS.map((q, i) => (
            <Box
              key={i}
              ref={(el: HTMLDivElement | null) => {
                questionRefs.current[i] = el;
              }}
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
                backgroundColor: '#FFF',
                border: '1px solid #DDD',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    mr: 1,
                    px: 1,
                    py: 0.5,
                    backgroundColor: '#8E2DE2',
                    color: '#FFF',
                    borderRadius: 1,
                    fontWeight: 600,
                  }}
                >
                  Q{i + 1}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {q}
                </Typography>
              </Box>

              <RadioGroup
                row
                value={answers[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                sx={{ alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant="caption" color="text.secondary">
                  思わない
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {RADIO_OPTIONS.map((opt) => (
                    <FormControlLabel
                      key={opt.value}
                      value={opt.value}
                      control={
                        <Radio
                          sx={{
                            p: 0,
                            '& .MuiSvgIcon-root': { fontSize: { xs: 24, sm: 28 } },
                            color: '#8E2DE2',
                            '&.Mui-checked': { color: '#8E2DE2' },
                          }}
                        />
                      }
                      label=""
                      sx={{ m: 0 }}
                    />
                  ))}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  思う
                </Typography>
              </RadioGroup>
            </Box>
          ))}

          <Box sx={{ px: 2, pb: 2 }}>
            <Button
              fullWidth
              onClick={handleSubmit}
              disabled={answeredCount < QUESTIONS.length}
              variant="contained"
              sx={{
                py: 1.75,
                borderRadius: 3,
                background: 'linear-gradient(90deg, #CF9FFF 0%, #8E2DE2 100%)',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: '0 6px 16px rgba(142,45,226,0.4)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #8E2DE2 0%, #CF9FFF 100%)',
                },
              }}
            >
              診断する
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}
