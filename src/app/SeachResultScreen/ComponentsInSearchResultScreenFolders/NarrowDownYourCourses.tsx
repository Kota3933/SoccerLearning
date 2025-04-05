//サッカーの技術、指導者用と選手用、レベル難易度、レビュー
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function NarrowDownYourCourses() {
    return (
        <div style={{ width: "100%", maxWidth: "600px" }}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">ポジション</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="skill"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Goalkeeper" control={<Radio />} label="ゴールキーパー（GK）" />
                            <FormControlLabel value="Centerback" control={<Radio />} label="センターバック（CB)" />
                            <FormControlLabel value="Sideback/Fullback" control={<Radio />} label="サイドバック/フルバック（SB/FB）" />
                            <FormControlLabel value="Wingback" control={<Radio />} label="ウィングバック（WB）" />
                            <FormControlLabel value="DefensiveMidfielder" control={<Radio />} label="ディフェンシブミッドフィルダー（DMF）" />
                            <FormControlLabel value="CentralMidfielder" control={<Radio />} label="セントラルミッドフィルダー（CMF）" />
                            <FormControlLabel value="OffensiveMidfielder" control={<Radio />} label="オフェンシブミッドフィルダー（AMF）" />
                            <FormControlLabel value="SideHalf/Right/LeftMidfielder" control={<Radio />} label="サイドハーフ / 右・左ミッドフィルダー（SMF/RMF/LMF）" />
                            <FormControlLabel value="Centreforward" control={<Radio />} label="センターフォワード（CF）" />
                            <FormControlLabel value="Wing/Right&LeftWingforward" control={<Radio />} label="ウイング / 右・左ウイングフォワード（WF/RW/LW）" />
                            <FormControlLabel value="SecondTop" control={<Radio />} label="セカンドトップ（SS)" />

                        </RadioGroup>
                    </FormControl>

                </AccordionDetails> 
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">技術</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="skill"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="pass" control={<Radio />} label="パス" />
                            <FormControlLabel value="shoot" control={<Radio />} label="シュート" />
                            <FormControlLabel value="dribble" control={<Radio />} label="ドリブル" />
                            <FormControlLabel value="trap" control={<Radio />} label="トラップ" />
                            <FormControlLabel value="lifting" control={<Radio />} label="リフティング" />
                            <FormControlLabel value="tactics" control={<Radio />} label="戦術" />
                            <FormControlLabel value="positioning" control={<Radio />} label="ポジショニング" />

                        </RadioGroup>
                    </FormControl>

                </AccordionDetails> 
            </Accordion>
            {/* <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">評価</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        評価についての絞り込み
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">ユーザー</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ユーザー選択
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="skill"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="ForPlayers" control={<Radio />} label="選手用" />
                            <FormControlLabel value="ForInstructors" control={<Radio />} label="指導者用" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">難易度</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        レベルについての絞り込み
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">価格</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        技術についての絞り込み
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography component="span">ビデオ時間</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ビデオ時間についての絞り込み
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
        </div>
    );
}