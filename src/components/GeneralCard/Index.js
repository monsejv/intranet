import React, {useState} from 'react'

import './style.scss'

import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    Button
  } from 'reactstrap';

import { prototipos, detailPrototype } from '../../lib/modals';

import TableModal from '../TableModal/Index'
import FlayerModal from '../FlayerModal/Index'

const GeneralCard = props => {
    const { img,
        classImage,
        title,
        text,
        textButton,
        showModalFc
      }  = props.data

    const [modalProt, setModalP] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggleProto = () => setModalP(!modalProt);
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
    }
    const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
    }

    return(
      <section>
          <FlayerModal nestedModal={nestedModal} toggleNested={toggleNested} closeAll={closeAll} toggle={toggleProto} toggleAll={toggleAll} dataModal={detailPrototype}  />
          <TableModal modalStatus={modalProt} dataModal={prototipos} fc={toggleProto} nested={toggleNested} className="up-hand"  />
            <Card className="mb-4 shadow">
                <CardBody>
                <CardImg  src={img} className={classImage} alt="Card image cap" />
                <CardTitle tag="h5" className="mt-3">{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button color="primary" className="next" onClick={toggleProto}>{textButton}</Button>
                </CardBody>
            </Card>
      </section>
    )
}

export default GeneralCard