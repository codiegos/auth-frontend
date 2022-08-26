import { Button, Row, Col } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import AppLayout from "../components/AppLayout";
import AppTable from "../components/AppTable";
import AppLoading from "../components/AppLoading";
import { getUser } from "../services/api/users";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const user = await getUser();
    setData(user);
  };

  if (!data) return <AppLoading />;

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <AppLayout>
      <Row
        style={{ flexDirection: "column", height: "100%" }}
        justify="space-around"
      >
        <Col>
          <Row justify="center">
            <h1>Hola {data.name}</h1>
          </Row>
        </Col>
        <Col>
          <Row justify="center">{<AppTable data={[data]} />}</Row>
        </Col>
        <Col>
          <Row justify="center">
            <Button type="primary" size="large" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default Home;
