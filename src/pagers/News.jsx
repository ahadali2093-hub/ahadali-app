import React, { useState, useEffect } from "react";
import API from "../api";

function News() {
  const [newsImage, setNewsImage] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await API.get("/api/news");
        setNews(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getNews();
  }, []);
    const editNews = async (item) => {
  const title = window.prompt(
    "News title:",
    item.title
  );

  if (!title) return;

  const description = window.prompt(
    "Description:",
    item.description
  );

  if (!description) return;

  await API.put(
    `/news/${item._id}`,
    {
      title,
      description,
    },
    config
  );

  loadData();
};
const addNews = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append(
    "title",
    newsForm.title
  );

  formData.append(
    "description",
    newsForm.description
  );

  if (newsImage) {
    formData.append("image", newsImage);
  }

  await API.post(
    "/news",
    formData,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  setNewsImage(null);

  setNewsForm({
    title: "",
    description: "",
  });

  loadData();
};

  return (
    <section className="page">

      <div className="page-header">
        <p>LATEST UPDATES</p>
        <h1>News & Updates</h1>
      </div>

      <div className="news-grid">

        {news.map((item) => (
          <article
            className="news-card"
            key={item._id}
          >

            <div className="news-image">
              ⛽
            </div>

            <div className="news-content">

              <small>
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </small>

              <h2>{item.title}</h2>

              <p>
                {item.description}
              </p>

            </div>

          </article>
        ))}
       <button
  className="edit-btn"
  onClick={() =>
    editNews(item)
  }
>
  Edit
</button>
<input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setNewsImage(e.target.files[0])
  }
/>
{news.map((item) => (
  <article
    className="news-card"
    key={item._id}
  >

    {item.image ? (
      <img
        src={item.image}
        alt={item.title}
        className="news-real-image"
      />
    ) : (
      <div className="news-image">
        ⛽
      </div>
    )}

    <div className="news-content">

      <small>
        {new Date(
          item.createdAt
        ).toLocaleDateString()}
      </small>

      <h2>{item.title}</h2>

      <p>{item.description}</p>

    </div>

  </article>
))}
      </div>

    </section>
  );
}

export default News;