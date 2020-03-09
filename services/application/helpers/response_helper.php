<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if (!function_exists('response_code')) {
    function response_code($code = NULL) {

        if ($code !== NULL) {

            switch ($code) {
                case 100: $text = 'Continue'; break;
                case 101: $text = 'Switching Protocols'; break;
                case 200: $text = 'OK'; break;
                case 201: $text = 'Created'; break;
                case 202: $text = 'Accepted'; break;
                case 203: $text = 'Non-Authoritative Information'; break;
                case 204: $text = 'No Content'; break;
                case 205: $text = 'Reset Content'; break;
                case 206: $text = 'Partial Content'; break;
                case 300: $text = 'Multiple Choices'; break;
                case 301: $text = 'Moved Permanently'; break;
                case 302: $text = 'Moved Temporarily'; break;
                case 303: $text = 'See Other'; break;
                case 304: $text = 'Not Modified'; break;
                case 305: $text = 'Use Proxy'; break;
                case 400: $text = 'Bad Request'; break;
                case 401: $text = 'Unauthorized'; break;
                case 402: $text = 'Payment Required'; break;
                case 403: $text = 'Forbidden'; break;
                case 404: $text = 'Not Found'; break;
                case 405: $text = 'Method Not Allowed'; break;
                case 406: $text = 'Not Acceptable'; break;
                case 407: $text = 'Proxy Authentication Required'; break;
                case 408: $text = 'Request Time-out'; break;
                case 409: $text = 'Conflict'; break;
                case 410: $text = 'Gone'; break;
                case 411: $text = 'Length Required'; break;
                case 412: $text = 'Precondition Failed'; break;
                case 413: $text = 'Request Entity Too Large'; break;
                case 414: $text = 'Request-URI Too Large'; break;
                case 415: $text = 'Unsupported Media Type'; break;
                case 500: $text = 'Internal Server Error'; break;
                case 501: $text = 'Not Implemented'; break;
                case 502: $text = 'Bad Gateway'; break;
                case 503: $text = 'Service Unavailable'; break;
                case 504: $text = 'Gateway Time-out'; break;
                case 505: $text = 'HTTP Version not supported'; break;
                default:
                    $text = 'Unknown http status code '.$code;
                break;
            }
            return array("code" => $code, "text" => $text);
        }
    }
}

if(!function_exists("info")){
    function info($passed, $statusCode) {
		$ci =& get_instance();
        $data['server'] = $_SERVER['SERVER_NAME'];
		$data['baseUrl'] = base_url();
		$data['requestUrl'] = current_url();
        $data['requestMethod'] = $_SERVER['REQUEST_METHOD'];
        $data['httpResponseCodes'] = response_code($statusCode);
        $data["codeigniter_version"] = CI_VERSION;
        $data["phpVersion"] = phpversion();
        $data["memory_usage"] = $ci->benchmark->memory_usage();
        $data["elapsedTime"] = $ci->benchmark->elapsed_time();
        foreach ($passed as $key => $val) {
            $data[$key] = $val;
        }
        return $data;
    }
}

if(!function_exists("json")){
    function json($response, $passed = array(), $statusCode) {
		$ci =& get_instance();
		$ci->output->set_content_type('application/json');
        $ci->output->set_status_header($statusCode);
        $ci->output->set_header("Access-Control-Allow-Origin: *");
        $ci->output->set_header("Access-Control-Allow-Headers: Authorization");
        $output = array_merge(info($passed, $statusCode), $response);
		$ci->output->set_output(json_encode($output));
    }
}

