import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Alert from "@portal/_components/alert";
import Card from "@portal/_components/card";
import Typography from "@portal/_components/typography";


import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function CouponsCreate({ data }) {
    const { page_title } = data;
    const { flash } = usePage().props;

    return(
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
                    <Breadcrumb.CurrentLink>Create Coupon</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <div className="sm:w-full lg:w-[560px] mb-7">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Create Coupon</Typography>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </div>
        </Main>
    )
}