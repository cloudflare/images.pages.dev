// export const jsonFetcher = (...args: Parameters<typeof fetch>) =>
//   fetch(...args).then((response) => response.json());

export const jsonFetcher = async (
  ...args: Parameters<typeof fetch>
): Promise<any> => {
  const request = new Request(...args);
  const url = new URL(request.url);

  switch (url.pathname) {
    case "/api/images": {
      return [
        {
          id: "photo-1546527868-ccb7ee7dfa6a",
          previewURL:
            "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 0,
        },
        {
          id: "photo-1593134257782-e89567b7718a",
          previewURL:
            "https://images.unsplash.com/photo-1593134257782-e89567b7718a",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 12,
        },
        {
          id: "photo-1583511655826-05700d52f4d9",
          previewURL:
            "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 0,
        },
        {
          id: "photo-1583337130417-3346a1be7dee",
          previewURL:
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 0,
        },
        {
          id: "photo-1600804340584-c7db2eacf0bf",
          previewURL:
            "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 0,
        },
        {
          id: "photo-1600077106724-946750eeaf3c",
          previewURL:
            "https://images.unsplash.com/photo-1600077106724-946750eeaf3c",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 0,
        },
        {
          id: "photo-1510337550647-e84f83e341ca",
          previewURL:
            "https://images.unsplash.com/photo-1510337550647-e84f83e341ca",
          name: "puppy.jpg",
          alt: "A puppy",
          uploaded: "2021-11-08T15:25:00Z",
          private: false,
          downloadCount: 0,
        },
      ];
    }
  }
};
