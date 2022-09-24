import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import '../Pages_style.css'

function Footer(props) {
    return (
        <div>
            <div className={'Footer'}>
                <h2>О сайте:</h2>
                <p className={'FooterText'}>На этом сайте я собрал много различных ресурсов, где вы сможете испытать свою удачливость и получить бесплатные скины для csgo.</p>
                <p className={'FooterText'}>Также там есть много игр благодаря которым вы сможете улучшить свой инвентарь в csgo.</p>
                <p className={'FooterText'}>Желаю вам удачи.</p>
                <p className={'FooterText'}> Email:
                    <a className={'Link'} href="mailto:oleksii0205@gmail.com" target="_blank">oleksii0205@gmail.com</a>
                </p>
            </div>


        </div>
    );
}

export default Footer;