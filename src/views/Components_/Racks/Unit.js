import React from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Fade } from 'reactstrap';

const Unit = (props) => {

  let {
    name,
    facility_id,
    display_name,
    status,
    type,
    width,
    u_height,
    created,
    last_updated
  } = this.props.rack

  return (
    <Col xs="12" sm="6" md="4">
      <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
        <Card>
          <CardHeader>
            <strong>Name: </strong>{ name }
            <div className="card-header-actions">
              {/*eslint-disable-next-line*/}
              <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
              {/*eslint-disable-next-line*/}
              <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
              {/*eslint-disable-next-line*/}
              {/* <a className="card-header-action btn btn-close" onClick={this.toggleFade}><i className="icon-close"></i></a> */}
            </div>
          </CardHeader>
          <Collapse isOpen={this.state.collapse} id="collapseExample">
            <CardBody>
              <p>{ facility_id || 'No facility ID specified' }</p>
              <p>{ display_name || 'No display name specified' }</p>
              <p>{ status.label || 'No status specified' }</p>
              <p>{ type.label || 'No type specified'}</p>
              <p>{ width.label || 'No width specified' }</p>
              <p>{ u_height || 'No height specified' }</p>
              <p>{ created || 'No creation date specified' }</p>
              <p>{ last_updated || 'No updates on record'}</p>
            </CardBody>
          </Collapse>
        </Card>
      </Fade>
    </Col>
  )
}

export default Unit;
