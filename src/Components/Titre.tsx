interface TitreProps{
    title : string
}

const Titre = ({title} : TitreProps) => {
    return (
        <div className="uppercase font-bold mb-5 text-center text-3xl">
            {title}
        </div>
    )
}

export default Titre