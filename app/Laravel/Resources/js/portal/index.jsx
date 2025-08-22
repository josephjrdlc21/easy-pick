import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Alert from "@portal/_components/alert";

import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Index({ data }) {
    const { page_title } = data;
    const { flash } = usePage().props;

    return(
        <Main>  
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Dashboard</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}
        </Main>
    );
}