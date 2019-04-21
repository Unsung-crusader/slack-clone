import React from 'react';

import { db } from '../../../firebase';

export default function ChatMessages() {
  return (
    <div className="px-6 py-4 flex-1 overflow-y-scroll">
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/steveschoger/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs">11:46</span>
          </div>
          <p className="text-black leading-normal">
            The slack from the other side.
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/adamwathan/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Adam Wathan</span>
            <span className="text-grey text-xs">12:45</span>
          </div>
          <p className="text-black leading-normal">
            How are we supposed to control the marquee space without an utility
            for it? I propose this:
          </p>
          <div className="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/davidhemphill/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">David Hemphill</span>
            <span className="text-grey text-xs">12:46</span>
          </div>
          <p className="text-black leading-normal">
            <a
              href="#"
              className="inline-block bg-blue-lightest text-blue no-underline"
            >
              @Adam Wathan
            </a>{' '}
            the size of the generated CSS is creating a singularity in
            space/time, we must stop adding more utilities before it's too late!
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/steveschoger/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs">11:46</span>
          </div>
          <p className="text-black leading-normal">
            The slack from the other side.
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/adamwathan/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Adam Wathan</span>
            <span className="text-grey text-xs">12:45</span>
          </div>
          <p className="text-black leading-normal">
            How are we supposed to control the marquee space without an utility
            for it? I propose this:
          </p>
          <div className="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/davidhemphill/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">David Hemphill</span>
            <span className="text-grey text-xs">12:46</span>
          </div>
          <p className="text-black leading-normal">
            <a
              href="#"
              className="inline-block bg-blue-lightest text-blue no-underline"
            >
              @Adam Wathan
            </a>{' '}
            the size of the generated CSS is creating a singularity in
            space/time, we must stop adding more utilities before it's too late!
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/steveschoger/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs">11:46</span>
          </div>
          <p className="text-black leading-normal">
            The slack from the other side.
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/adamwathan/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Adam Wathan</span>
            <span className="text-grey text-xs">12:45</span>
          </div>
          <p className="text-black leading-normal">
            How are we supposed to control the marquee space without an utility
            for it? I propose this:
          </p>
          <div className="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/davidhemphill/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">David Hemphill</span>
            <span className="text-grey text-xs">12:46</span>
          </div>
          <p className="text-black leading-normal">
            <a
              href="#"
              className="inline-block bg-blue-lightest text-blue no-underline"
            >
              @Adam Wathan
            </a>{' '}
            the size of the generated CSS is creating a singularity in
            space/time, we must stop adding more utilities before it's too late!
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/steveschoger/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs">11:46</span>
          </div>
          <p className="text-black leading-normal">
            The slack from the other side.
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/adamwathan/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Adam Wathan</span>
            <span className="text-grey text-xs">12:45</span>
          </div>
          <p className="text-black leading-normal">
            How are we supposed to control the marquee space without an utility
            for it? I propose this:
          </p>
          <div className="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/davidhemphill/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">David Hemphill</span>
            <span className="text-grey text-xs">12:46</span>
          </div>
          <p className="text-black leading-normal">
            <a
              href="#"
              className="inline-block bg-blue-lightest text-blue no-underline"
            >
              @Adam Wathan
            </a>{' '}
            the size of the generated CSS is creating a singularity in
            space/time, we must stop adding more utilities before it's too late!
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/steveschoger/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs">11:46</span>
          </div>
          <p className="text-black leading-normal">
            The slack from the other side.
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/adamwathan/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Adam Wathan</span>
            <span className="text-grey text-xs">12:45</span>
          </div>
          <p className="text-black leading-normal">
            How are we supposed to control the marquee space without an utility
            for it? I propose this:
          </p>
          <div className="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/davidhemphill/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">David Hemphill</span>
            <span className="text-grey text-xs">12:46</span>
          </div>
          <p className="text-black leading-normal">
            <a
              href="#"
              className="inline-block bg-blue-lightest text-blue no-underline"
            >
              @Adam Wathan
            </a>{' '}
            the size of the generated CSS is creating a singularity in
            space/time, we must stop adding more utilities before it's too late!
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/steveschoger/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs">11:46</span>
          </div>
          <p className="text-black leading-normal">
            The slack from the other side.
          </p>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/adamwathan/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Adam Wathan</span>
            <span className="text-grey text-xs">12:45</span>
          </div>
          <p className="text-black leading-normal">
            How are we supposed to control the marquee space without an utility
            for it? I propose this:
          </p>
          <div className="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <img
          src="https://twitter.com/davidhemphill/profile_image"
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">David Hemphill</span>
            <span className="text-grey text-xs">12:46</span>
          </div>
          <p className="text-black leading-normal">
            <a
              href="#"
              className="inline-block bg-blue-lightest text-blue no-underline"
            >
              @Adam Wathan
            </a>{' '}
            the size of the generated CSS is creating a singularity in
            space/time, we must stop adding more utilities before it's too late!
          </p>
        </div>
      </div>
    </div>
  );
}
