import {Paper} from "@mui/material";
import {VideoComponent} from "../../../../components/video";

import './style.scss';

export const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us__video-block">
                <h1 className="about-us__video-block-title">Про нас</h1>

                <div className="our-programs">
                    <div className="our-programs__items">
                        <Paper className="our-programs__item">
                            <h2 className="our-programs__item-title">
                                Що це за програма?
                            </h2>
                            <p>
                                «Зцілення душевних ран» – унікальна міжнародна програма, яка розроблена Інститутом
                                Зцілення
                                Травм (Trauma Healing Institute) та впроваджена в більш ніж 100 країнах світу
                                (проводиться
                                на
                                120 мовах). Програма створена для надання допомоги людям, які мають фізичні, емоційні
                                або
                                душевні травми, що викликані різноманітними причинами.
                            </p>
                        </Paper>

                        <Paper className="our-programs__item">
                            <h2 className="our-programs__item-title">
                                Чим вона унікальна?
                            </h2>
                            <p>
                                Ми пропонуємо унікальну програму, яка побудована на основі ефективних методик в роботі з
                                травмою на фізичному, емоційному та духовному рівнях. Вона поєднує в собі наукові
                                підходи
                                базової психології з глибинними біблійними принципами духовного розвитку людини, що
                                сприяє
                                повноцінному та глибокому зціленню від травм. Програма надає людині незамінні
                                інструменти,
                                які допоможуть їй впоратися з кризовими ситуаціями в майбутньому, а також навчить
                                допомагати
                                іншим.
                            </p>
                        </Paper>

                        <Paper className="our-programs__item" >
                            <h2 className="our-programs__item-title">
                                Цільова аудиторія
                            </h2>
                            <p>
                                Програма «Зцілення душевних ран» створена для того, щоб допомогти людям, які пережили
                                травмуючий досвід. На основі біблійних принципів та психологічних підходів ми навчаємо
                                людей, як надати необхідну допомогу людям, що мають фізичні, емоційні чи душевні травми.
                                В
                                період війни, з 2016 року, важливим напрямком для нас є робота з військовими капеланами
                                та
                                сімʼями військовослужбовців.
                            </p>
                        </Paper>
                    </div>

                    <VideoComponent cardClassName="about-us__video" src="./video.mp4" srcPoster="./про_нас_постер-min.jpg"/>
                </div>
            </div>

            <div className="about-us__our-direction-block">

                <h1 className="about-us-direction__title">
                    Напрямки роботи
                </h1>


                <div className="about-us__our-directions">
                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Навчальний напрямок</h2>
                        <p>
                            Ми проводимо програми, що поширюють обізнаність в темі травми на навчають надавати першу
                            психологічно-духовну допомогу.
                            <br/>
                            <br/>
                            Навчання актуальне душпасторам, соціальним працівникам, психологам, тим, хто працює з
                            соціальними групами, що переживають травму війни та тим, кому потрібна допомога.
                        </p>
                    </Paper>

                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Робота з капеланами</h2>
                        <p>
                            “Інститут Зцілення Травм” Українського Біблійного Товариства співпрацює з Службою
                            військового
                            капеланства Збройних Сил України та долучені до навчання капеланів під час підготовчої
                            програми.
                        </p>
                    </Paper>

                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Група підтримки</h2>
                        <p>
                            Ми проводимо роботу в невеликих групах по 5-8 осіб, основним правилом яких є
                            конфіденційність.
                            <br/>
                            <br/>
                            Групи направлені на роботу з дружинами та рідними діючих військовослужбовців, сімʼями
                            загиблих
                            та зниклих безвісти захисників.
                        </p>
                    </Paper>

                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Табори</h2>
                        <p>
                            2023 року ми розпочали реалізацію трьохрічного проекту: 4 табори в рік для покращення
                            психоемоційного стану дітей військовослужбовців, зниклих безвісти та полонених захисників.
                            <br/>
                            <br/>
                            Також ми проводимо табори підтримки для дружин загиблих військовослужбовців.
                        </p>
                    </Paper>
                </div>
            </div>
        </div>
    )
};