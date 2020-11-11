import React from 'react';
import Base from '../../core/Base';
import { AdminLeftPanel, AdminPanelLink, AdminRightPanel, AdminWrapper } from './AdminElements';

const AdminDashboard = () => {

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
            This is right side
        </AdminRightPanel>
    )

    return (
        <Base>
            <AdminWrapper className="row">
                <div className="col-left">
                    {leftPanel()}
                </div>
                <div className="col-right">
                    {rightPanel()}
                </div>
            </AdminWrapper>
        </Base>
    )
}

export default AdminDashboard
