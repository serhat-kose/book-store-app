package com.serhat.web.store.entity.book;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "book")
@Data
@Getter
@Setter
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
    private String coverPhotoURL;
    private Long isbnNumber;
    private Double price;
    private String language;
    private String genre;

    @JsonCreator
    public Book(@JsonProperty("id") Long id, @JsonProperty("title") String title, @JsonProperty("author") String author,
                @JsonProperty("coverPhotoUrl") String coverPhotoURL, @JsonProperty("isbnNumber") Long isbnNumber,
                @JsonProperty("price") Double price, @JsonProperty("language") String language,@JsonProperty("genre") String genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.coverPhotoURL = coverPhotoURL;
        this.isbnNumber = isbnNumber;
        this.price = price;
        this.language = language;
        this.genre=genre;
    }
}
