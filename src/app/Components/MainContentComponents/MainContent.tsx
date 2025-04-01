'use client';
import { Box, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material'

export default function MainContent() {
    return (
        <div className='mt-4 mb-4'>
            <Box>
                <h1 className='text-center text-4xl mb-5'>Popular Soccer Course</h1>
                <Box sx={{ display: 'flex', gap: '30px', overflow: 'auto', justifyContent: 'center', flexWrap: 'wrap', mt: '8', mb: '4' }}>

                    {/* 1つ目のカード */}
                    <Card sx={{ width: '300px', height: '300px', borderRadius: '16px', boxShadow: '6', backgroundColor: '#ffffff', transition: '0.3s', border: '1px solid #4F772D', m: 2 }}>
                        <CardMedia
                            component="img"
                            width="50%" // 幅をカードの50%に設定
                            height="auto" // 高さは自動で調整
                            src="/white_defense.jpeg" // 画像のURL
                            alt="講座1"
                            sx={{ objectFit: 'contain', objectPosition: 'center', margin: '0 auto' }} // 画像を中央に配置し、縦横比を保つ
                        />
                        <CardActionArea href="#">
                            <CardContent>
                                <Typography className='text-center text-2xl'>講座1</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    {/* 2つ目のカード */}
                    <Card sx={{ width: '300px', height: '300px', borderRadius: '16px', boxShadow: '6', backgroundColor: '#ffffff', transition: '0.3s', border: '1px solid #4F772D', m: 2 }}>
                        <CardMedia
                            component="img"
                            width="50%" // 幅を50%に設定
                            height="auto" // 高さを自動調整
                            src="/white_shoot.jpeg" // 画像のURL
                            alt="講座2"
                            sx={{ objectFit: 'contain', objectPosition: 'center', margin: '0 auto' }} // 画像を中央に配置
                        />
                        <CardActionArea href="#">
                            <CardContent>
                                <Typography className='text-center text-2xl'>講座2</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    {/* 3つ目のカード */}
                    <Card sx={{width: '300px', height: '300px', borderRadius: '16px', boxShadow: '6', backgroundColor: '#ffffff', transition: '0.3s', border: '1px solid #4F772D', m: 2 }}>
                        <CardMedia
                            component="img"
                            width="10%" // 幅を50%に設定
                            height="auto" // 高さを自動調整
                            src="/white_pass.jpeg" // 画像のURL
                            alt="講座3"
                            sx={{ objectFit: 'contain', objectPosition: 'center', margin: '0 auto' }} // 画像を中央に配置
                        />
                        <CardActionArea href="#">
                            <CardContent>
                                <Typography className='text-center text-2xl'>講座3</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    {/* 4つ目のカード */}
                    <Card sx={{ width: '300px', height: '300px', borderRadius: '16px', boxShadow: '6', backgroundColor: '#ffffff', transition: '0.3s', border: '1px solid #4F772D', m: 2 }}>
                        <CardMedia
                            component="img"
                            width="50%" // 幅を50%に設定
                            height="auto" // 高さを自動調整
                            src="/white_dribble.jpeg" // 画像のURL
                            alt="講座4"
                            sx={{ objectFit: 'contain', objectPosition: 'center', margin: '0 auto' }} // 画像を中央に配置
                        />
                        <CardActionArea href="#">
                            <CardContent>
                                <Typography className='text-center text-2xl'>講座4</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Box>
            </Box>
        </div>
    );
};
