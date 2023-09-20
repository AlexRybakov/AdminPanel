import { Button, Card} from "antd";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        cover={
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6b443b70759853.5bade2d0a6685.png" style={{ width: "50%"}}/>
        }
      >
      </Card>
      <Button size="large" onClick={() => { navigate(-1) }}>
        Назад
      </Button>
    </>
  );
};
