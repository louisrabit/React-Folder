import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/Images/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/Images/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/Images/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/Images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape