import "./Modal.scss";

const Modal = ({ onClose, children }) => {
    return (
        <div 
            className="modal-backdrop" 
            onClick={onClose}>
                <div 
                    className="modal"
                    onClick={e => e.stopPropagation()}
                >
                    {children}
                </div>
        </div>
    );
};

export default Modal;