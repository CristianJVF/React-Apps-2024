

const Popup = ({ visible, setVisible }) => {
    return (
        <div visible={visible}>
            <button onClick={() => setVisible(false)}>Cerrar</button>
        </div >
    )
}

export default Popup;