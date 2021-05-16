import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { PATH } from 'src/routes/path';
import './styles.scss';

function ServerError() {
  const history = useHistory();
  return (
    <div className="main">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={() => history.push(PATH.HOME)}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default ServerError;
