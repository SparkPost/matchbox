import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import '@sparkpost/matchbox-css/dist/index.css';

describe('Visual Regression', () => {
  add('Matchbox Css', () => (
    <div>
      <section>
        <h2 className="font-size-400 font-weight-bold mb-100 color-gray-700">Example</h2>
        <div className="border-width-100 border-color-gray-300">
          <h2 className="font-size-400 line-height-400 font-weight-bold px-450 pt-450">
            Panel Title
          </h2>
          <div className="p-450">Panel Content</div>
          <div className="p-450 border-width-0 border-top-width-100 border-color-gray-300">
            <button
              className="bg-blue-700 color-white px-400 h-650 mr-400 font-size-200 hover:bg-blue-600 motion-duration-medium motion-ease-in-out"
              style={{ border: 'none', outline: 'none' }}
            >
              Panel Action
            </button>
          </div>
        </div>
        <div className="mt-500">
          <button
            className="bg-blue-700 color-white px-300 h-600 mr-400 font-size-200 hover:bg-blue-600 motion-duration-medium motion-ease-in-out"
            style={{ border: 'none', outline: 'none' }}
          >
            Small Button
          </button>
          <button
            className="bg-blue-700 color-white px-400 h-650 mr-400 font-size-200 hover:bg-blue-600 motion-duration-medium motion-ease-in-out"
            style={{ border: 'none', outline: 'none' }}
          >
            Default Button
          </button>
          <button
            className="bg-blue-700 color-white px-500 h-750 font-size-300 hover:bg-blue-600 motion-duration-medium motion-ease-in-out"
            style={{ border: 'none', outline: 'none' }}
          >
            Default Button
          </button>
        </div>
      </section>
      <section className="my-500">
        <h2 className="font-size-400 font-weight-bold mb-100 color-gray-700">Font Sizes</h2>
        <div>
          <div className="font-size-800 line-height-800">Font Size 800</div>
          <div className="font-size-700 line-height-700">Font Size 700</div>
          <div className="font-size-600 line-height-600">Font Size 600</div>
          <div className="font-size-500 line-height-500">Font Size 500</div>
          <div className="font-size-400 line-height-400">Font Size 400</div>
          <div className="font-size-300 line-height-300">Font Size 300</div>
          <div className="font-size-200 line-height-200">Font Size 200</div>
          <div className="font-size-100 line-height-100">Font Size 100</div>
          <div className="font-size-50 line-height-50">Font Size 50</div>
        </div>
      </section>
      <section className="my-500">
        <h2 className="font-size-400 font-weight-bold mb-100 color-gray-700">Font Families</h2>
        <div>
          <div className="font-size-400 line-height-400 font-family-sans">Sans</div>
          <div className="font-size-400 line-height-400 font-family-monospace">Monospace</div>
        </div>
      </section>
      <section className="my-500">
        <h2 className="font-size-400 font-weight-bold mb-100 color-gray-700">Spacing</h2>
        <div style={{ display: 'flex' }}>
          <div className="bg-blue-700 w-0 h-600 pr-100 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-200 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-300 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-400 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-450 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-500 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-550 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-600 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-650 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-700 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-750 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-800 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-850 mr-500"></div>
          <div className="bg-blue-700 w-0 h-600 pr-900 mr-500"></div>
        </div>
      </section>
      <section className="my-500">
        <h2 className="font-size-400 font-weight-bold mb-100 color-gray-700">Borders</h2>
        <div style={{ display: 'flex' }}>
          <div className="bg-blue-300 w-600 h-600 border-width-0 border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-600 h-600 border-width-100 border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-600 h-600 border-width-200 border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-600 h-600 border-width-100 border-radius-0 border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-600 h-600 border-width-100 border-radius-100 border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-600 h-600 border-width-100 border-radius-200 border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-600 h-600 border-width-100 border-radius-circle border-color-gray-900 mr-500"></div>
          <div className="bg-blue-300 w-800 h-600 border-width-100 border-radius-pill border-color-gray-900 mr-500"></div>
        </div>
      </section>
      <section className="my-500">
        <h2 className="font-size-400 font-weight-bold mb-100 color-gray-700">Elevation</h2>
        <div style={{ display: 'flex' }}>
          <div className="bg-white border-width-100 border-color-gray-900 w-600 h-850 box-shadow-0 mr-500"></div>
          <div className="bg-white border-width-100 border-color-gray-900 w-600 h-850 box-shadow-100 mr-500"></div>
          <div className="bg-white border-width-100 border-color-gray-900 w-600 h-850 box-shadow-200 mr-500"></div>
          <div className="bg-white border-width-100 border-color-gray-900 w-600 h-850 box-shadow-300 mr-500"></div>
          <div className="bg-white border-width-100 border-color-gray-900 w-600 h-850 box-shadow-400 mr-500"></div>
        </div>
      </section>
    </div>
  ));
});
