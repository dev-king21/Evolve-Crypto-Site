<?php

namespace App\Handler;

use Illuminate\Http\Request;
use Spatie\WebhookClient\WebhookConfig;
use Spatie\WebhookClient\Exceptions\WebhookFailed;

class AlfaCoinSigValidator implements SignatureValidator
{
    public function isValid(Request $request, WebhookConfig $config)
    {
        return true;
    }
}