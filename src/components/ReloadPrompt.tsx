import CloseIcon from '@mui/icons-material/Close';
import UpdateIcon from '@mui/icons-material/Update';
import { Alert, IconButton, Snackbar } from '@mui/material';

import { useRegisterSW } from 'virtual:pwa-register/react';

const ReloadPrompt = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      // eslint-disable-next-line no-console
      console.error('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <Snackbar
      autoHideDuration={needRefresh ? undefined : 2000}
      open={offlineReady || needRefresh}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={needRefresh ? 'info' : 'success'}
        onClose={close}
        action={
          <>
            {needRefresh && (
              <IconButton
                size="small"
                aria-label="Update"
                color="inherit"
                onClick={() => updateServiceWorker(true)}
              >
                <UpdateIcon fontSize="small" />
              </IconButton>
            )}
            <IconButton size="small" aria-label="Close" color="inherit" onClick={close}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      >
        {offlineReady ? 'Page cached' : 'Page has been updated, click to update'}
      </Alert>
    </Snackbar>
  );
};

export default ReloadPrompt;
