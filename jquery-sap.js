/*
    Copyright 2016 Jaycliff Arcilla of Eversun Software Philippines Corporation

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
/* jshint unused:true */
(function (window, $) {
	"use strict";
	$.createSimpleAudioPlayer = function createSimpleAudioPlayer() {
		var file_input = document.createElement('input'),
			source_urls = [],
			audio_element = new Audio(),
			show_logs = true;
		file_input.setAttribute('type', 'file');
		file_input.setAttribute('multiple', true);
		file_input.setAttribute('name', 'track-loader');
		//file_input.setAttribute('accept', 'audio/*');
		file_input.setAttribute('accept', '.mp3,.wav,.ogg,.webm');
		file_input.setAttribute('style', 'display: none !important;');
		file_input.onchange = (function () {
			
		});
		audio_element.controls = false;
		audio_element.autoplay = true;
		//audio_element.setAttribute('controls', true);
		//audio_element.setAttribute('autoplay', true);
		audio_element.onloadedmetadata = function () {
			console.log('[LOADEDMETADATA EVENT] Metadata is available!');
		};
		audio_element.oncanplaythrough = function () {
			console.log('[CANPLAYTHROUGH EVENT] Can now play without interruption!');
		};
		audio_element.onsuspend = function () {
			console.log('[SUSPEND EVENT] Audio may have now finished loading.');
		};
		audio_element.onemptied = function () {
			console.log('[EMPTIED EVENT]');
		};
		return {
			open: function open() {
				file_input.click();
			},
			receive: function receive(list) {
				
			}
		};
	};
}(window, typeof jQuery === "function" && jQuery));