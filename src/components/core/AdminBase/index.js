import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../reuseableComponents/Buttons';
import { AdminHeaderText, AdminLeftPanel, AdminPanelLink, AdminRightPanel, AdminWrapper,AdminHeadingP, AdminHeaderContainer } from './AdminBaseElements';

const AdminBase = ({ title, desc, children }) => {

    const leftPanel = () => (
        <AdminLeftPanel>
            <li>
                <AdminPanelLink to="/admin/create/products"> Create Products </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/create/categories"> Create Categories </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/manage/categories"> Manage Categories </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/manage/products"> Manage Products </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/manage/orders"> Manage Orders </AdminPanelLink>
            </li>
        </AdminLeftPanel>
    );

    const rightPanel = () => (
        <AdminRightPanel>
            <AdminHeaderContainer>
                <div>
                    <AdminHeaderText>{title}</AdminHeaderText>
                    <AdminHeadingP>{desc}</AdminHeadingP>
                </div>
                <Link to="/">
                    <PrimaryButton width="100px" style={{ height: "40px"}}>Home</PrimaryButton>
                </Link>
            </AdminHeaderContainer>
            {children}
        </AdminRightPanel>
    )

    return (
        <AdminWrapper className="row">
            <div className="col-left">
                {leftPanel()}
            </div>
            <div className="col-right">
                {rightPanel()}
            </div>
        </AdminWrapper>
    )
}

export default AdminBase
