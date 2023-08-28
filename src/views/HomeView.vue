<template>
  <main class="why">
    <div class="gallery">
      <figure>
        <p>
          <img class="gallery-image" src="../assets/now.jpeg" alt="now" />
          <figcaption>Последнее селфи</figcaption>
        </p>
      </figure>
      <figure>
        <p>
          <img class="gallery-image" src="../assets/school.jpeg" alt="school" />
        <figcaption>В старшей школе</figcaption>
        </p>
      </figure>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .why {
    display: flex;
    align-items: center;
  }

  .gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }

  .gallery > figure {
    width: 90%;
    text-align: center;
    border: 1px solid silver;
    padding: 0.5rem;
  }

  .gallery-image {
    object-fit: cover;
    width: 100%;
  }
}
</style>
