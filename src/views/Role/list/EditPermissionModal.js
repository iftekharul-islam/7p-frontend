// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Label,
  Input,
  Table,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  FormFeedback,
  UncontrolledTooltip
} from 'reactstrap'

// ** Third Party Components
import { Info } from 'react-feather'
import { useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPermission, getRolePermission, UpdateRolePermission } from '../store'

const EditPermissionModal = ({show, setShow, item}) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (item?.id) {
      dispatch(getRolePermission(item.id))
      dispatch(getAllPermission())
    }
  }, [item])

  const store = useSelector(state => state.roles)

  // ** Hooks
  const {
    reset,
    setValue
  } = useForm({ defaultValues: { roleName: '' } })
  
  const [permissions, setPermissions] = useState([])
  
  
  const onSubmit = (e) => {
    e.preventDefault()
    const data = {permission: permissions, id: item.id}
    dispatch(UpdateRolePermission(data))
    setShow(false)
  }

  const onReset = () => {
    setShow(false)
    reset({ roleName: '' })
  }

  const handleModalClosed = () => {
    setValue('roleName')
  }

  useEffect(() => {
    const data = []
    store.allPermission.forEach(val => {
        data.push({attach: store?.role?.some(item => item.id == val.id), permission_id: val.id, data:val})
    })
    setPermissions(data)
  }, [store.role])
  

  const changePermission =  (item, value) => {
    const res = permissions.map(itm => {
      if (itm.permission_id === item?.permission_id) {
        return {permission_id: item?.permission_id, attach: value, data: item?.data}
      } else {
        return itm
      }
    })
    setPermissions(res)
  }

  return (
    <Fragment>
      <Modal
        isOpen={show}
        onClosed={handleModalClosed}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-5 pb-5'>
          <div className='text-center'>
            <h1>{item?.title}</h1>
            <p>Set role permissions</p>
          </div>
          <Row tag='form' onSubmit={onSubmit}>
            <Col xs={12}>
              <h4 className='mt-2'>Role Permissions</h4>
              <Table className='table-flush-spacing' responsive>
                <tbody>
                  <tr>
                    <td className='text-nowrap fw-bolder'>
                      <span className='me-50'> Administrator Access</span>
                      <Info size={14} id='info-tooltip' />
                      <UncontrolledTooltip placement='top' target='info-tooltip'>
                        Allows a full access to the system
                      </UncontrolledTooltip>
                    </td>
                    <td>
                      <div className='form-check'>
                        <Input type='checkbox' id='select-all' />
                        <Label className='form-check-label' for='select-all'>
                          Select All
                        </Label>
                      </div>
                    </td>
                  </tr>
                  {/* {store.permissionList.map((item, index) => {
                    const role = item?.name
                    return ( */}
                      <tr>                        
                        <td className='text-nowrap fw-bolder'></td>
                        <td>
                          <div className='d-flex'>
                            {permissions?.map((item, index) => {
                              return (
                                <div className='form-check me-3 me-lg-5 w-100' key={index}>
                                  <Input type='checkbox' id={item?.data?.name} onChange={(e) => changePermission(item, e.target.checked)} checked={item?.attach}/>
                                  <Label className='form-check-label w-100' for={item?.data?.name}><nobr>
                                    {item?.data?.name}
                                    </nobr>
                                  </Label>
                                </div>
                              )
                            })}
                          </div>
                        </td>
                      </tr>
                    {/* )
                  })} */}
                </tbody>
              </Table>
            </Col>
            <Col className='text-center mt-2' xs={12}>
              <Button type='submit' color='primary' className='me-1'>
                Submit
              </Button>
              <Button type='reset' outline onClick={onReset}>
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default EditPermissionModal

