import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { PATH } from 'src/routes/path';
import './styles.scss';

function PageNotFound() {
  const history = useHistory();
  return (
    <div className="main">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push(PATH.HOME)}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default PageNotFound;
