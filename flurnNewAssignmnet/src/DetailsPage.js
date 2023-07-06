import React, { useState } from 'react';

function DetailsPage() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <h2>Pokemon Details</h2>
      {/* Display all the details fetched from API */}
      <button onClick={handleBookmark}>
        {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
      </button>
    </div>
  );
}

export default DetailsPage;
