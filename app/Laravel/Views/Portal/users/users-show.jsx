import Main from "../_layouts/main";
import Breadcrumb from "../_components/breadcrumb";
import Card from "../_components/card";
import Link from "../_components/link";
import Typography from "../_components/typography";
import Badge from "../_components/badge";

import { Head } from "@inertiajs/react";
import { useRoute } from "../../../../../vendor/tightenco/ziggy/src/js";

export default function UsersShow({ data }) {
    const route = useRoute();
    
    const { page_title, user } = data;

    return (
        <Main>
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Users</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>User Details</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className="sm:w-full lg:w-[680px] mb-7">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">User Details</Typography>
                    </Card.Header>
                    <Card.Body>
                        <div className="flex flex-col md:flex-row md:justify-between md:space-x-6">
                            <div className="p-4 rounded flex-1">
                                <Typography tag="p">
                                    <b>Name</b><br />
                                    {user.name}
                                </Typography>
                                <Typography tag="p">
                                    <b>Status</b><br />
                                    <Badge variant={user.status === "active" ? "success" : "danger"}>
                                        {user.status}
                                    </Badge>
                                </Typography>
                            </div>
                            <div className="p-4 rounded flex-1">
                                <Typography tag="p">
                                    <b>Email</b><br />
                                    {user.email}
                                </Typography>
                                <Typography tag="p">
                                    <b>Date Created</b><br />
                                    {user.date_created}
                                </Typography>
                            </div>
                        </div>
                        <div className="mt-7"><hr className="mb-3"/>
                            <Link size="small" variant="secondary" href={route('portal.users.index')}>
                                <i className="fas fa-undo mr-2"></i> Return to List
                            </Link>
                             <Link size="small" variant="warning" href={route('portal.users.edit', user.id)}>
                                <i className="fas fa-edit mr-2"></i> Edit Details
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Main>
    );
}