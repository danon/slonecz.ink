import {toast} from 'react-toastify';

export {ToastContainer} from 'react-toastify';

export function success(title) {
  toast.success(title, options);
}

export function info(title) {
  toast.info(title, options);
}

const options = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true
};
