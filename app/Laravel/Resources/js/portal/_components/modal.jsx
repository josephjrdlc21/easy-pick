
const ModalTitle = ({ children }) => (
    <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200">
        <h3 id="modal-label" className="font-bold text-gray-800">{children}</h3>
    </div>
);

const ModalBody = ({ children }) => (
    <div className="p-4">
        <p className="mt-1 text-gray-800">{children}</p>
    </div>
);

const ModalFooter = ({ children }) => (
    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200">
        {children}
    </div>
);

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            role="dialog"
            aria-labelledby="modal-label"
        >
            <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border border-gray-200 shadow-2xl rounded-xl">
                {children}
                </div>
            </div>
        </div>
    );
};


Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;