import React from 'react';
export default function RelatedGrid({ title, google_colors }) {
  return (
    <div>
      <h1 className="text-gradient">{title}</h1>
      <div>
        <div>
          {google_colors && google_colors.length > 0 ? (
            <>
              {!google_colors ? (
                <div>Loading...</div>
              ) : (
                <div className="grid">
                  {google_colors &&
                    google_colors.map((item) => {
                      return (
                        <div
                          className="grid_item"
                          style={{
                            backgroundColor: `${item.hexCode}`,
                          }}
                        >
                          <img src={item.thumbnail} />
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
    </div>
  );
}
