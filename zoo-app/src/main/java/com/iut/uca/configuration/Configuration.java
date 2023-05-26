package com.iut.uca.configuration;

import com.mongodb.MongoClient;
import jakarta.enterprise.context.ApplicationScoped;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

@ApplicationScoped
public class Configuration {
  public CodecRegistry registerCodecs() {
    CodecRegistry defaultRegistry = CodecRegistries.fromRegistries(
        MongoClient.getDefaultCodecRegistry()
    );

    CodecRegistry pojoRegistry = CodecRegistries.fromProviders(
        PojoCodecProvider.builder().automatic(true).build()
    );

    return CodecRegistries.fromRegistries(
        defaultRegistry,
        pojoRegistry
    );
  }
}
