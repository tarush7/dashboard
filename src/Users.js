import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import { Badge, Button, Table } from 'react-bootstrap';
import './CSS/Users.css'

function User() {
  const { theme } = useContext(ThemeContext);

  const UserMainBGClass = `${theme}-Users-mainBG`;
  const TableHeaderBGClass = `${theme}-table-header`;
  const TableBodyBGClass = `${theme}-table-body`;

  const TableHeaderElementClass = `${theme}-table-header-elements`;
  const TableBodyElementClass =`${theme}-table-body-elements`;
  
  return (
    <div className={`Users-mainBG ${UserMainBGClass} vh-100`}>
      <Table className='table-hover table-main'>
        <thead>
          <tr className={`${TableHeaderBGClass} m-5`}>
            <th className={`px-4 ${TableHeaderElementClass}`}>Name</th>
            <th className={TableHeaderElementClass}>Title</th>
            <th className={TableHeaderElementClass}>Status</th>
            <th className={TableHeaderElementClass}>Position</th>
            <th className={TableHeaderElementClass}>Actions</th>
          </tr>
        </thead>
        <tbody className={TableBodyBGClass}>
          <tr>
            <td>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>John Doe</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>john.doe@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Software engineer</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>IT department</p>
            </td>
            <td>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={TableBodyElementClass}>Senior</td>
            <td>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Jane Smith</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>jane.smith@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Data Scientist</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>Data Science department</p>
            </td>
            <td>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={TableBodyElementClass}>Senior</td>
            <td>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/10.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Robert Johnson</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>robert.johnson@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Product Manager</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>Product department</p>
            </td>
            <td>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={TableBodyElementClass}>Senior</td>
            <td>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/11.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Emily Davis</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>emily.davis@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>UX Designer</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>Design department</p>
            </td>
            <td>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={TableBodyElementClass}>Senior</td>
            <td>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/12.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Michael Brown</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>michael.brown@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>QA Engineer</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>QA department</p>
            </td>
            <td>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={TableBodyElementClass}>Senior</td>
            <td>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/13.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Alice Williams</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>alice.williams@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>Business Analyst</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>Business department</p>
            </td>
            <td>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={TableBodyElementClass}>Senior</td>
            <td>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
          <tr className='no-border'>
            <td className='no-border'>
              <div className='d-flex align-items-center px-3'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/14.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>David Miller</p>
                  <p className={`text-muted mb-0 ${TableBodyElementClass}`}>david.miller@gmail.com</p>
                </div>
              </div>
            </td>
            <td className='no-border'>
              <p className={`fw-bold mb-1 ${TableBodyElementClass}`}>DevOps Engineer</p>
              <p className={`text-muted mb-0 ${TableBodyElementClass}`}>DevOps department</p>
            </td>
            <td className='no-border'>
              <Badge variant='success' pill>
                Active
              </Badge>
            </td>
            <td className={`no-border ${TableBodyElementClass}`}>Senior</td>
            <td className='no-border'>
              <Button variant='link' size='sm'>
                Edit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default User;