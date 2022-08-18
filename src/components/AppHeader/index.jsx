import React from 'react'
import { PageHeader } from 'antd';

function AppHeader() {
  return (
    <PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title="Back"
    subTitle=""
  />
  )
}

export default AppHeader

