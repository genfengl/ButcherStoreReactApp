import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BreadcrumbExample = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href='#'>
                Beef
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbExample