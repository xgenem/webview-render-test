export const getHTMLContent = (content: string) => `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          div {
            width: 100%;
          }
          img {
            width: 100%;
            height: auto;
            max-height: 400px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          }
          h2 {
            margin-top: 20px;
            text-align: center;
          }
          p {
            text-align: justify;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        ${content}
        <script>
          (function() {
            var container = document.querySelector('div');
            var img = container.querySelector('img');
            img.addEventListener('load', function() {
              var containerRect = container.getBoundingClientRect();
              var imgRect = img.getBoundingClientRect();
              if (imgRect.height > containerRect.height) {
                var offsetY = (imgRect.height - containerRect.height) / 2;
                img.style.transform = 'translateY(-' + offsetY + 'px)';
              }
            });
          })();
        </script>
      </body>
    </html>
  `;
