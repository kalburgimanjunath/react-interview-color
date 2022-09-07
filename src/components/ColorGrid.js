import React from 'react';
import { LOADING } from './config/constants';
export default function ColorGrid({ title, colors }) {
  return (
    <div>
      <h1 className="text-gradient">{title}</h1>
      <div>
        {colors.length > 0 ? (
          <>
            {!colors ? (
              <div>{LOADING}</div>
            ) : (
              <div className="grid">
                {colors &&
                  colors.map((item) => {
                    return (
                      <div
                        className="grid_item"
                        style={{
                          backgroundColor: `${item.hexCode}`,
                        }}
                      >
                        <div>{item.name}</div>
                        <div>{item.hexCode}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        ) : (
          <div>Results not found</div>
        )}
      </div>
    </div>
  );
}
