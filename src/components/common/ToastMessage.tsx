import { notification } from 'antd';

export const TypeToast = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

export const toastMessage = (message: string, description: string, type: string = TypeToast.SUCCESS) => {
  const messageToast = {
    message,
    description,
  };
  switch (type) {
    case TypeToast.ERROR:
      notification.error(messageToast);
      break;
    case TypeToast.INFO:
      notification.info(messageToast);
      break;
    case TypeToast.WARNING:
      notification.warning(messageToast);
      break;
    default:
      notification.success(messageToast);
  }
};
