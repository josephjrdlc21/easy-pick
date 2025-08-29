<?php

namespace App\Laravel\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class Product extends Model{
    
    use SoftDeletes;

    public $timestamps = true;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            $product->code = $product->generate_product_code();
        });

        static::deleting(function ($product) {
            $product->attachment()->delete();
        });
    }
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = "products";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    /**
     * The attributes that created within the model.
     *
     * @var array
     */
    protected $appends = [
        'date_created', 
        'date_updated'
    ];
    
    protected $dates = [];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];

    public function getDateCreatedAttribute()
    {
        return $this->created_at->format('m/d/Y h:i A');    
    }

    public function getDateUpdatedAttribute()
    {
        return $this->updated_at->format('m/d/Y h:i A');    
    }

    public function generate_product_code()
    {
        $prefix = strtoupper(substr($this->category->name ?? 'GEN', 0, 4));
        $year = date('y');
        $last_code = self::whereHas('category', function($q) {
            $q->where('id', $this->category_id);
        })
        ->whereYear('created_at', date('Y'))
        ->orderBy('id', 'desc')
        ->value('code');

        if ($last_code) {
            $last_seq = (int) substr($last_code, -4);
            $next_seq = str_pad($last_seq + 1, 4, '0', STR_PAD_LEFT);
        } 
        else {
            $next_seq = '0001';
        }

        return "{$prefix}-{$year}-{$next_seq}";
    }

    public function category(){
		return $this->belongsTo('App\Laravel\Models\Category', 'category_id', 'id');
	}

    public function merchant(){
		return $this->belongsTo('App\Laravel\Models\Merchant', 'merchant_id', 'id');
	}

    public function attachment(){
        return $this->hasMany('App\Laravel\Models\ProductAttachment', 'product_id', 'id');
    }
}