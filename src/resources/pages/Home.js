/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from 'react-router-dom';
import '../css/home.css';
import { Card, TextField } from "@material-ui/core";
import Cookies from "universal-cookie";

export default class Home extends React.Component {

    getLoginPath = () => {
        let cookies = new Cookies().get("cookies");
        if (cookies) {
            if (cookies.isStudent)
                return "/student";
            return "/teacher";
        }
        return "/auth";
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div id="enter-screen" style={{ width: "100%", height: "100%" }}>
                    <div className="container">
                        <figure className="logo animated fadeInDown delay-07s">
                            <Link to="#"><img src={require("../images/logo.png")} alt="" /></Link>
                        </figure>
                        <h1 className="logo-detail animated fadeInUp delay-1s">
                            Школа изучения английского языка<br /> для детей 5-18 лет
                    </h1>
                        <a className="link animated fadeInUp delay-1s servicelink" href="#about">Начать</a>
                    </div>
                </div>
                <nav className="main-nav-outer" id="test">
                    
                    <div className="container">
                        <ul className="main-nav">
                            <li><a href="#about">О школе</a></li>
                            <li><a href="#methodic">Методика</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                            <li className="small-logo"><a href="#enter-screen"><img src={require("../images/logo.png")} alt="" /></a></li>
                            <li><a href="#faq">Вопросы</a></li>
                            <li><a href="#free-lesson-title">Пробный урок</a></li>
                            <li><a href={this.getLoginPath()}>Ввойти</a></li>
                        </ul>

                        <a className="res-nav_click" href="#"><i className="fa fa-bars"></i></a>
                    </div>
                </nav>
                <section className="main-section" id="about">
                    {/* <!--main-section-start--> */}
                    <div className="container">
                        <h2>О школе</h2>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                                <p>
                                    Наша школа - это современная интернет платформа, которая обеспечивает уникальную возможность заниматься с персональным учителем (репетитором) прямо у себя дома на вашем компьютере, не тратя сил и времени на посещение специализированных школ или частных преподавателей.
                                </p><br />
                                <p>
                                    Мы обеспечиваем наиболее высокий уровень преподавания (профессионализм учителей, интерактивные материалы и современные методики, адоптированные под разные возрасты и уровни подготовки детей, от самого начального до продвинутого)
                                </p>
                            </div>
                            <figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
                                <img src={require("../images/devices.png")} alt="" />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="about-lesson-section">
                    <div className="container">
                        <br />
                        <h2>Как проходят уроки в школе «English Online»?</h2>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                                <div className="icon-text-list">
                                    <div className="icon-text-list-col1">
                                        <img src={require("../images/two-persons.png")} alt="" />
                                    </div>
                                    <div className="icon-text-list-col2">
                                        Один на один со своим персональным учителем (живой урок с репетитором, не выходя из дома!)
                                    </div>
                                </div>

                                <div className="icon-text-list">
                                    <div className="icon-text-list-col1">
                                        <img src={require("../images/clock.png")} alt="" />
                                    </div>
                                    <div className="icon-text-list-col2">
                                        40 минут (оптимально для детей)
                                    </div>
                                </div>

                                <div className="icon-text-list">
                                    <div className="icon-text-list-col1">
                                        <img src={require("../images/timeTable.png")} alt="" />
                                    </div>
                                    <div className="icon-text-list-col2">
                                        Уроки в удобное для Вас время
                                    </div>
                                </div>

                                <div className="icon-text-list">
                                    <div className="icon-text-list-col1">
                                        <img src={require("../images/pptx-icon.png")} alt="" />
                                    </div>
                                    <div className="icon-text-list-col2">
                                        Все материалы и пособия доступны на нашем сайте всегда
                                    </div>
                                </div>
                            </div>

                            <figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
                                <img src={require("../images/lesson-people.png")} alt="" />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="school-is-section">
                    <div className="container">
                        <br />
                        <h2>Школа English Online это:</h2>
                        <br />
                        <div className="row">
                            <div className="col-md-5 school-is-card wow fadeInRight delay-05s">
                                <h2>Экономия огромного количества времени</h2>
                                <img src={require("../images/clockimg.png")}></img>
                                <br />
                                <p style={{ textAlign: "start" }}>Вам не надо тратить свое свободное время и деньги на проезд к репетитору, а всего лишь включить компьютер и зайти в свой персональный кабинет школы English Online, где вас уже будет с нетерпением ждать преподаватель.</p>
                            </div>
                            <div className="col-md-5 col-md-offset-1 school-is-card">
                                <h2>Добрые и отзывчивые учителя</h2>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                                        <p style={{ textAlign: "start" }}>Наши преподаватели кроме филологического образования и сертификатов по знанию языка, имеют глубокие познание в детской психологии. Они помогут не только выучить английский, а также развить креативное мышление у ребенка.</p>
                                    </div>
                                    <figure style={{ padding: "0" }} className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
                                        <img id="teacher-img" style={{ marginRight: "0px" }} src={require("../images/teacher.png")} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5 col-md-offset-3 school-is-card wow fadeIn delay-05s">
                                <h2>Умеренная цена</h2>
                                <p>От 190 грн за урок.</p>
                                <img src={require("../images/money-card.png")}></img>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5 school-is-card wow fadeInLeft delay-05s">
                                <h2>Вы всегда в курсе успеваемости своего ребенка.</h2>
                                <div className="row" style={{ position: "relative" }}>
                                    <figure style={{ padding: "0", position: "absolute", width: "450px", height: "450px" }} className="col-lg-4 col-sm-6  text-right wow fadeInUp delay-02s">
                                        <img id="success-img" style={{ margin: "0px" }} src={require("../images/success.png")} alt="" />
                                    </figure>
                                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    <div className="col-lg-8 col-md-offset-4 col-sm-6 pull-bottom wow fadeInLeft delay-05s">
                                        <p style={{ textAlign: "start" }}>Наши преподаватели кроме филологического образования и сертификатов по знанию языка, имеют глубокие познание в детской психологии. Они помогут не только выучить английский, а также развить креативное мышление у ребенка.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1 school-is-card wow fadeInRight delay-05s">
                                <h2>Гибкий график</h2>
                                <img src={require("../images/timetableimg.png")}></img>
                                <br />
                                <p style={{ textAlign: "start" }}>Возможность менять расписание уроков и оптимально планировать свой день (ребенок будет успевать на все свои любимые дополнительные секции), а мы поможем подобрать лучшее время для его/ее занятий английским.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="methodic-section" id="methodic">
                    {/* <!--main-section-start--> */}
                    <div className="container">
                        <h2>Методика</h2>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                                <br /><br /><br /><br />
                                <p>
                                    Методика разработана для детей всех возрастов и разных уровней подготовки. Корректируется нашими специалистами под особенности и цели каждого ребенка.
                                </p><br /><p>
                                    Уникальные возможности нашей платформы позволили создать современную интерактивную, а главное эффективную программу  английского, как для тех, кто только хочет начать изучение этого языка, так и для более старших ребят, желающих повысить свой уровень знаний и оценки в школе.
                                </p>
                            </div>
                            <figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
                                <img src={require("../images/methodic.png")} alt="" />
                            </figure>
                        </div>
                    </div>
                </section>
                <div className="container" id="free-lesson-title">
                    <div className="row">
                        <div className="titleCenterText" style={{height:"100px"}}>
                            <h2>Начните с пробного урока (это же бесплатно!)</h2>
                        </div>
                    </div>
                </div>

                <section className="free-lesson-section">
                    <div className="container">
                        <h2>Пробный урок</h2>
                        <div className="row">
                            <div className="col-md-5 .col-xs-6 col-md-offset-2">
                                <Card >
                                    <h3>Заполните Ваши данные</h3>
                                    <form>
                                        <TextField label="Ім'я учня" variant="outlined" required type="text" name="firstname"
                                            inputProps={{ style: { fontSize: 18 } }} // font size of input text
                                            InputLabelProps={{ style: { fontSize: 18 } }} // font size of input label
                                        ></TextField>

                                        <TextField label="Дата народження" variant="outlined" required type="date" name="birthdate"
                                            inputProps={{ style: { fontSize: 18 } }} // font size of input text
                                            InputLabelProps={{ style: { fontSize: 18 }, shrink: true, required: true }} // font size of input label
                                        ></TextField>

                                        <TextField label="Номер телефону" variant="outlined" required type="phone" name="phone"
                                            inputProps={{ style: { fontSize: 18 } }} // font size of input text
                                            InputLabelProps={{ style: { fontSize: 18 } }} // font size of input label
                                        ></TextField>

                                        <TextField label="Електронна пошта" variant="outlined" type="email" name="email"
                                            inputProps={{ style: { fontSize: 18 } }} // font size of input text
                                            InputLabelProps={{ style: { fontSize: 18 } }} // font size of input label
                                        ></TextField>

                                        <a className="link animated fadeInUp delay-1s" href="#about">Отправить заявку</a>
                                    </form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container" id="teachers-title">
                    <div className="row">
                    <div className="titleCenterText" style={{height:"100px"}}>
                        <h2>Преподаватели</h2>
                        </div>
                    </div>
                </div>
                <section className="teachers-section" id="teacher">
                    {/* <!--main-section-start--> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                                <br /><br /><br /><br />
                                <p>
                                    Наши преподаватели – профессионалы своего дела, они сделают процесс обучения легким, интересным, а главное полезным для Вашего ребенка.
                                </p><br /><p>
                                    Помогут не только в вопросах английского, но и станут лучшими друзьями для каждого ребенка, смогут порадоваться за успехи и утешить, если что-то не выходит.
                                </p>
                            </div>
                            <figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
                                <img src={require("../images/teacherimg.png")} alt="" />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="faq-section" id="faq">
                    <div className="container">
                        <h2 style={{ textAlign: "left" }}>Вопросы/ответы</h2>
                        <div style={{ paddingLeft: "0" }}>
                            <div className="row">
                                <h3>Как проходит обучение?</h3><br />
                                <p>После заполнения заявки на пробный урок, ученику создаётся его рабочий кабинет, в котором и будет проходить дальнейшее обучение. Там он и его родители смогут видеть комментарии к урокам и выполнять домашнее задание. После пробного урока ребенку подбирается соответствующий уровень.</p>
                            </div>
                            <div className="row">
                                <h3>Какая методика?</h3><br />
                                <p>Наша методика включает в себя выполнение интерактивных заданий на уроке, а также при выполнении домашнего задания. На протяжении урока учителя сочетают все виды заданий, как для улучшения разговорных навыков ребенка, так и тренируют письмо, лексику и грамматику. Обучение проходит в игровой форме, что облегчает ученику понимание различных тем, мотивирует его к выполнению всех заданий и способствует улучшению результатов в школе.</p>
                            </div>
                            <div className="row">
                                <h3>Что нужно иметь на уроке?</h3><br />
                                <p>Компьютер или ноутбук с вебкамерой и микрофоном, наушники либо гарнитура и хорошее интернет соединение.  Так как для каждого ребенка подбирается собственная программа, то преподаватель на пробном уроке оповестит о необходимости каких-либо дополнительных вещей (тетрадки, ручка, карандаши…).</p>
                            </div>
                            <div className="row">
                                <h3>Можно ли заниматься с телефона/планшета?</h3><br />
                                <p>Мы не рекомендуем использовать телефоны либо планшеты, так как они не способствуют усидчивости ребенка на занятии и технически не позволяют обеспечить качественное проведение урока. Для полного погружения и выполнения всех интерактивных заданий лучше подойдут компьютер или ноутбук с хорошей гарнитурой.</p>
                            </div>
                            <div className="row">
                                <h3>Можно ли родителям присутствовать на уроке?</h3><br />
                                <p>Можно, но не обязательно, так как после каждого урока родители получают полный отчет и запись. Если родители все же решили присутствовать, то они не должны помогать или как-то давить на ребенка. ДОВЕРЬТЕСЬ НАШИМ УЧИТЕЛЯМ!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container" id="school-about-title">
                    <div className="row">
                    <div className="titleCenterText" style={{height:"100px"}}>
                        <h2 style={{color:"black"}}>О школе</h2>
                        </div>
                    </div>
                </div>
                <section className="school-about-section">
                    <div className="container-fluid">
                        <div className="row" style={{ margin: "0", backgroundColor: "#FAFAFA" }}>
                            <div className="col-md-6" style={{ backgroundColor: "#FAFAFA", paddingTop: "15px" }}>
                                <div className="col-md-6 col-md-offset-6">
                                    <p>Языковая школа English Online это место, где Ваш ребенок будет чувствовать себя комфортно, а Вы уверены в отличном результате. Занимаясь с нашими преподавателями, дети смогут получить те необходимые знания, без которых в будущем не обойтись современному человеку. </p>
                                    <p>Почему же так важен английский язык? Для начала, такие профессии как экономист, программист, юрист и другие, в повседневной работе используют английские термины, общаются с иностранными коллегами, и конечно же те, кто владеют английским языком становятся в приоритете. Ведь намного легче и быстрее будет самому высказать свое мнение, чему обязательно научат учителя из школы English Online, чем обращаться к переводчику.</p>
                                </div></div>
                            <div className="col-md-6" style={{ backgroundColor: "#263238", color: "white", paddingTop: "15px" }}>
                                <div className="col-md-6">
                                    <p>Современным школьникам так же предоставляться огромные возможности учебы в заграничных вузах, основным требуемым критерием которых является, конечно же, хорошее знание английского языка. </p>
                                    <p>Наша школа помогает подтянуть оценки по английскому, так как программа ориентируется на те темы, которые являются особенно сложными и запутанными для учеников и на которые другие учебные заведения не уделяют соответствующего внимания.</p>
                                    <p>Вся команда школы English Online будет всегда рада помочь в генерации самого лучшего курса именно для Вашего ребенка.</p>
                                </div></div>
                        </div>
                    </div>
                </section>
                <section className="contacts-section" id="contacts">
                    <div className="container">
                        <h2 style={{ color: "white", fontSize: "50pt" }}>Контакты</h2>
                        <br />
                        <div className="row">
                            <a href="tel:+380506789940"><div className="icon-text-list" style={{ color: "white" }}>
                                <div className="icon-text-list-col1">
                                    <img src={require("../images/call.png")} alt="" />
                                </div>
                                <div className="icon-text-list-col2" style={{ fontSize: "32pt" }}>
                                    +380506789940
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href="mailto:example@mail.com">
                                <div className="icon-text-list" style={{ color: "white" }}>
                                    <div className="icon-text-list-col1">
                                        <img src={require("../images/email.png")} alt="" />
                                    </div>
                                    <div className="icon-text-list-col2" style={{ fontSize: "32pt" }}>
                                        example@mail.com
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="container" id="footer">
                    <div className="row">
                        <h2>© 2019, English Online</h2>
                    </div>
                </div>
            </div>)
    }
} 