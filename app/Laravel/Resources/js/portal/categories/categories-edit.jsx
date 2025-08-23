import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Alert from "@portal/_components/alert";
import Card from "@portal/_components/card";
import Typography from "@portal/_components/typography";
import Form from "@portal/_components/form";
import Button from "@portal/_components/button";
import Link from "@portal/_components/link";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function CategoriesEdit({ data }) {
    const route = useRoute();

    const { page_title, category } = data;
    const { errors, flash} = usePage().props;
    const [values, setValues] = useState({name: category.name ?? '',});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.post(route('portal.categories.edit', category.id), values);
    }

    return(
        <Main>
            <Head title={page_title} />
            
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Categories</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Edit Category</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <div className="sm:w-full lg:w-[600px] mb-7">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Edit Category</Typography>
                    </Card.Header>
                    <Card.Body>
                        <Typography tag="p">Fill up the <span className="text-red-600">( * )</span> required fields before submitting the form.</Typography>
                        <Form onSubmit={handleSubmit}>        
                            <Form.Control>
                                <Form.Label name="name">Category <span className="text-red-600">*</span></Form.Label>
                                <Form.Input
                                    name="name"
                                    type="text"
                                    placeholder="category name"
                                    value={values.name}
                                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                                />
                                {errors.name && <small className="text-red-500">{errors.name}</small>}
                            </Form.Control>
                            <div className="mt-7"><hr className="mb-3"/>
                                <Link size="small" variant="secondary" href={route('portal.categories.index')}>
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
    )
}