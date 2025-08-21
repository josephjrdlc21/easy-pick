import Main from "./_layouts/main";
import Breadcrumb from "./_components/breadcrumb";
import Card from "./_components/card";
import Button from "./_components/button";
import Alert from "./_components/alert";
import Typography from "./_components/typography";
import FormControl from "./_components/form";
import Badge from "./_components/badge";
import Table from "./_components/table";
import Dropdown from "./_components/dropdowns";

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