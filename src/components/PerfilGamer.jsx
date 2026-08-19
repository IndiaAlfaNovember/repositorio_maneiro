import React from "react"

const jogos = [
    { id: 1, titulo: 'Madagascar 2: fuga da África Ps2', horas: '670h', capa: 'https://www.gamereactor.pt/media/15/madagascar_171514.jpg' },
    { id: 1, titulo: 'O segredo dos animais: venha para a festa Ps2', horas: '670h', capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0qjnib9op2JhE0zTLBEsd3MhXFkpUKsYjA1B2DAggQ&s=10' },
    { id: 1, titulo: 'Ratatoille Ps2', horas: '670h', capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOF9d1tBH4Xc_xV3Xz_e672_nbwqnzfpMfp_TgwnUOg&s=10' },
    { id: 1, titulo: 'Toy Story 3 Ps2', horas: '670h', capa: 'https://m.media-amazon.com/images/I/81JohU9ecpL._AC_UF1000,1000_QL80_.jpg' },
    { id: 1, titulo: 'O Galinho Chicken Little Ps2', horas: '670h', capa: 'https://m.media-amazon.com/images/I/712VIFtfdCL.jpg' },
    { id: 1, titulo: 'Red Dead Redemption 2', horas: '670h', capa: '' },
]
export default function PerfilGamer() {
    return (
        <div className="w-full max-w-screen bg-slate-900 border border-slate-800 rouded-2x1 overflow-hidden shadow-2x1">
            {/* Banner de destaque */}
            <div className="h-40 w-full bg-slate-800 relative">
                <img
                    src="https://i.ytimg.com/vi/8p-hs-5tKmM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIJF1_RtUZ4srWnx40bv2b-fQKsg"
                    alt="Foto de perfil"
                    className="w-full h-full opacity-60" />
            </div>
            {/* conteúdo */}
            <div className='p-6 relative'>
                {/* Avatar sobreposto e botões de ação(Cabeçalho) */}
                <div className="mb-1">
                    <h1 className="text-2x1 font-bold text-white">MarcelMango</h1>
                    <span className='text-sm font-semibold text-purple-400 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-800/50'>Lv 67</span>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm transition- all active:scale-95 cursor-pointer'>Adicionar</button>
            </div>
        </div>
    )
}