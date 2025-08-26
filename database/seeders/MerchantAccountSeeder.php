<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Laravel\Models\Merchant;
use Carbon\Carbon;

class MerchantAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $merchant = Merchant::where('email', 'juandelacruz@gmail.com')->first();

        if(!$merchant){
            $account = new Merchant;
            $account->name = "Juan Dela Cruz";
            $account->business_name = "Sample Incorporated";
            $account->business_line = "Technology";
            $account->business_scope = "National";
            $account->mobile_number = "+639381834892";
            $account->telephone_number = "02373218397914";
            $account->address = "Sample Street 2";
            $account->email = "juandelacruz@gmail.com";
            $account->status = "approved";
            $account->approver_id = 1;
            $account->approve_at = Carbon::now();
            $account->password = bcrypt("Aa@12345");
            $account->save();
        }
    }
}
