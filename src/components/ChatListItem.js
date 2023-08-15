import './ChatListItem.css';

const ChatListItem = ({onClick, active, data}) => {
    return (
        <div className={`chatListItem ${active ? 'active' : ''}`} onClick={onClick}>
            <img src={data.image} alt='' className='chatListItem--avatar' />
            <div className='chatListItem--lines'>
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>{data.title}</div>
                    <div className='chatListItem--date'>10:22</div>
                </div>
                <div className='chatListItem--line'>
                    <div className='chatListItem--lastMsg'>
                        <p>
                            Marcelo Rocha
                            Bonieky, você poderia abordar micro serviços em suas aulas, num módulo sobre arquitetura de sistemas.

                            Gilson Russo
                            boa noite a todos pessoal!

                            Lucas Affonso Hoffmann Schaefer
                            a live vai ficar por quanto tempo no ar depois de terminada?

                            Claudio Fernando Gaspar
                            Boa noite

                            Eucode
                            agora que eu vi, o firebase já é realtime

                            Claudio Fernando Gaspar
                            Eu também gostaria de saber quanto tempo ficar no ar depois de terminar?

                            William Nunes Pinheiro
                            Normalmente fica 1 semana no ar

                            Pedro Otávio
                            line-height</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem;