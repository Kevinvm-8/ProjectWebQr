package com.qradmin.db;

import com.google.gson.annotations.Expose;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "UrlList")
@Data
@Getter
@Setter

public class UrlList {
    @Id

    private String id;

    private String ip;

    private String Url;

    private boolean isBlackList;




}
