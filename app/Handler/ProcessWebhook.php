<?php
namespace App\Handler;
use \Spatie\WebhookClient\ProcessWebhookJob;

class ProcessWebhook extends ProcessWebhookJob
{
    public function handle(){
        $data = json_decode($this->webhookCall, true);
        logger($data['payload']);
        http_response_code(200); //Acknowledge you received the response
    }
}