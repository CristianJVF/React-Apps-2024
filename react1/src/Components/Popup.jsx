import Back from "../Data/Back"

const Popup = ({ visible, setVisible }) => {
    return (
        <Back visible={visible}>
            <button onClick={() => setVisible(false)}>Cerrar</button>
        </Back >
    )
}

export default Popup;