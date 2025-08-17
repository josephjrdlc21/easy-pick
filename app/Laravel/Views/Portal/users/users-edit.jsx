import Main from "../_layouts/main";
import Breadcrumb from "../_components/breadcrumb";
import Card from "../_components/card";
import Typography from "../_components/typography";
import Form from "../_components/form";
import Button from "../_components/button";
import Link from "../_components/link";
import Alert from "../_components/alert";

import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useRoute } from "../../../../../vendor/tightenco/ziggy/src/js";
import { router, usePage } from "@inertiajs/react";

export default function UsersEdit({ data }) {
    const { page_title, user } = data;
    const { errors, flash} = usePage().props;
    const route = useRoute();

    const [values, setValues] = useState({
        id: user.id ?? "",
        name: user.name ?? "",
        email: user.email ?? "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.post(route('portal.users.edit', values.id), values);
    }

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
                    <Breadcrumb.CurrentLink>Edit User</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <div className="sm:w-full lg:w-[680px] mb-7">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Edit User</Typography>
                    </Card.Header>
                    <Card.Body>
                        <Typography tag="p">Fill up the <span className="text-red-600">( * )</span> required fields before submitting the form.</Typography>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control>
                                <Form.Label name="name">Name <span className="text-red-600">*</span></Form.Label>
                                <Form.Input
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                                    placeholder="Juan Dela Cruz"
                                />
                                {errors.name && <small className="text-red-500">{errors.name}</small>}
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="email">Email <span className="text-red-600">*</span></Form.Label>
                                <Form.Input
                                    name="email"
                                    type="text"
                                    value={values.email}
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    placeholder="juandelacruz@example.com"
                                />
                                {errors.email && <small className="text-red-500">{errors.email}</small>}
                            </Form.Control>
                            <div className="mt-7"><hr className="mb-3"/>
                                <Link size="small" variant="secondary" href={route('portal.users.index')}>
                                    <i className="fas fa-undo mr-2"></i> Return to List
                                </Link>
                                <Button size="small" variant="primary" type="submit">
                                    <i className="fas fa-paper-plane mr-2"></i>Save
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Main>
    );
}