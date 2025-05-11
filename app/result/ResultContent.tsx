// app/result/ResultContent.tsx
'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
Radar,
RadarChart,
PolarGrid,
PolarAngleAxis,
PolarRadiusAxis,
ResponsiveContainer,
} from 'recharts';
import {
Container,
Box,
Typography,
Paper,
Button,
} from '@mui/material';

const TRAITS = [
'安心感',
'不安感',
'共感性',
'警戒心',
'自己コントロール',
];

const RESULT_TYPES = [
{
type: 'リスク認知優位型',
range: '20〜39',
title: 'リスク認知優位型',
description:
    '認知プロセスが優先し、不安要因の評価に長けているタイプ。状況を多角的に分析し、リスク管理を重視します。',
},
{
type: '情動安定調整型',
range: '40〜59',
title: '情動安定調整型',
description:
    '情動のバランスを保ち、適応的に感情を制御できるタイプ。ストレス下でも冷静さを維持する力があります。',
},
{
type: '感覚過敏評価型',
range: '60〜79',
title: '感覚過敏評価型',
description:
    '身体感覚に敏感で、不快なシグナルをいち早く検知します。事前準備や自己管理を徹底する傾向があります。',
},
{
type: '共感性制御型',
range: '80〜99',
title: '共感性制御型',
description:
    '他者の感情に高い共感力を持ちながら、自律的にその影響を管理するタイプ。対人関係の調整が得意です。',
},
{
type: '深層内省統合型',
range: '100〜120',
title: '深層内省統合型',
description:
    '自己の内面を深く観察し、その洞察を行動に統合するタイプ。深い内省を通じて自己成長を促します。',
},
];

export default function ResultContent() {
const searchParams = useSearchParams();
const router = useRouter();
const score = Number(searchParams.get('score'));
const result = RESULT_TYPES.find((r) => {
const [min, max] = r.range.split('〜').map(Number);
return score >= min && score <= max;
});

if (!result) {
return (
    <Container
    disableGutters
    maxWidth={false}
    sx={{
        background: 'linear-gradient(135deg,#FFDEE9 0%,#B5FFFC 100%)',
        minHeight: '100vh',
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 5 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
    >
    <Paper
        elevation={4}
        sx={{
        maxWidth: 400,
        width: '100%',
        mx: 'auto',
        p: 3,
        borderRadius: 2,
        textAlign: 'center',
        }}
    >
        <Typography variant="body1" gutterBottom>
        診断結果が見つかりませんでした。
        </Typography>
        <Button
        fullWidth
        variant="contained"
        onClick={() => router.push('/')}
        sx={{
            mt: 2,
            py: 1.5,
            borderRadius: 3,
            background: 'linear-gradient(90deg,#CF9FFF 0%,#8E2DE2 100%)',
            color: '#FFF',
            '&:hover': {
            background: 'linear-gradient(90deg,#8E2DE2 0%,#CF9FFF 100%)',
            },
        }}
        >
        ホームに戻る
        </Button>
    </Paper>
    </Container>
);
}

const data = TRAITS.map((trait) => ({
trait,
value: Math.round((score / 120) * 10 + Math.random() * 5),
}));

return (
<Container
    disableGutters
    maxWidth={false}
    sx={{
    background: 'linear-gradient(135deg,#FFDEE9 0%,#B5FFFC 100%)',
    minHeight: '100vh',
    px: { xs: 2, sm: 4 },
    py: { xs: 3, sm: 5 },
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
        p: { xs: 2, sm: 3 },
    }}
    >
    <Typography
        variant="h5"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
    >
        あなたのタイプは
        <Box component="span" sx={{ color: '#8E2DE2' }}>
        「{result.type}」
        </Box>
    </Typography>
    <Typography
        variant="body2"
        align="center"
        color="text.secondary"
        gutterBottom
    >
        (スコア: {score} 点／{result.range} 点)
    </Typography>

    <Box sx={{ width: '100%', height: 240, my: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={80} data={data}>
            <PolarGrid />
            <PolarAngleAxis
            dataKey="trait"
            tick={{ fontSize: 10, fill: '#555' }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 15]} tick={false} />
            <Radar
            name="傾向"
            dataKey="value"
            stroke="#8E2DE2"
            fill="#8E2DE2"
            fillOpacity={0.4}
            />
        </RadarChart>
        </ResponsiveContainer>
    </Box>

    <Typography
        variant="subtitle1"
        fontWeight={600}
        gutterBottom
        sx={{ mt: 1 }}
    >
        {result.title}
    </Typography>
    <Typography variant="body2" paragraph>
        {result.description}
    </Typography>

    <Button
        component={Link}
        href="/"
        fullWidth
        variant="contained"
        sx={{
        mt: 2,
        py: 1.75,
        borderRadius: 3,
        background: 'linear-gradient(90deg,#CF9FFF 0%,#8E2DE2 100%)',
        color: '#FFF',
        fontWeight: 700,
        textTransform: 'none',
        '&:hover': {
            background:
            'linear-gradient(90deg,#8E2DE2 0%,#CF9FFF 100%)',
        },
        }}
    >
        ホームに戻る
    </Button>
    </Box>
</Container>
);
}
